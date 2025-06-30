'use server';

import { auth } from '@clerk/nextjs/server';
import { createSupabaseClient } from '../supabase'; // ✅ Fix: Correct spelling

export const createCompanions = async (formData: CreateCompanion) => {
  console.log('Received form data:', formData);

  const { userId: author } = await auth(); // ✅ Gets the current user's ID
  const supabase = createSupabaseClient(); // ✅ Correct function name

  const { data, error } = await supabase
    .from('Companions')
    .insert({ ...formData, author }) // ✅ Add user ID to the record
    .select('*'); // ✅ Fetch the inserted row(s)

  console.log('Insert result:', data);
  console.log('Insert error:', error);

  if (error || !data || data.length === 0) {
    console.log(error);

    throw new Error(error?.message || 'Failed to create a companion');
  }

  return data[0]; // ✅ Return the created companion for use in client redirect
};

export const getAllCompanions = async ({
  limit = 10,
  page = 1,
  subject,
  topic,
}: GetAllCompanions) => {
  const supabase = createSupabaseClient();
  let query = supabase.from('Companions').select();
  console.log('Query ,', query);
  if (subject && topic) {
    query = query
      .ilike('subject', `%${subject}`)
      .or(`topic.ilike.%${topic}%,nba`);
  } else if (subject) {
    query = query.ilike('subject', `%${subject}`);
  } else if (topic) {
    query = query.or(`topic.ilike.%${topic}%,username.ilike.%${topic}%`);
  }

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data: companions, error } = await query;
  if (error) throw new Error(error.message);

  return companions;
};
