'use server';

import { auth } from '@clerk/nextjs/server';
import { createSupaseClient } from '../supabase';

export const createCompanions = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupaseClient();
  const { data, error } = await supabase
    .from('companions')
    .insert({ ...formData, author })
    .select('*');

  console.log(data, error);

  if (error || !data)
    throw new Error(error?.message || 'Failed to create a companion');
};
