'use client';
import { subjects } from '@/constants';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';

const SubjectFilter = () => {
  const [subject, setSubject] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('subject');

  useEffect(() => {
    const newUrl = '';

    if (subject) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'subject',
        value: subject,
      });

      router.push(newUrl, { scroll: false });
    } else {
      if (pathname === '/companions') {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['subject'],
        });

        router.push(newUrl, { scroll: false });
      }
    }
  }, [subject]);

  return (
    <div className="border border-black rounded-lg outline-none">
      <Select onValueChange={setSubject} defaultValue={subject}>
        <SelectTrigger className="w-full outline-none border-none rounded-lg ">
          <SelectValue placeholder="Select the subject" />
        </SelectTrigger>

        <SelectContent>
          {subjects.map((subject) => (
            <SelectItem key={subject} value={subject} className="capitalize">
              {subject}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SubjectFilter;
