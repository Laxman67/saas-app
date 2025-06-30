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
