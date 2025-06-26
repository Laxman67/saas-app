import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn, getSubjectColor } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface CompanionListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionList = ({
  title,
  companions,
  classNames,
}: CompanionListProps) => {
  return (
    <>
      <article className={cn('companion-list', classNames)}>
        <h2 className="font-bold text-3xl">Recent Sessions</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg w-2/3">Lessions</TableHead>
              <TableHead className="text-lg">Subjects</TableHead>
              <TableHead className="text-lg">Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companions?.map(({ id, subject, name, topic, duration }) => (
              <TableRow key={id}>
                <TableCell>
                  <Link href={`/companions/${id}`}>
                    <div className="flex items-center gap-2">
                      <div
                        className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden "
                        style={{ backgroundColor: getSubjectColor(subject) }}
                      >
                        <Image
                          src={`/icons/${subject}.svg`}
                          alt={name}
                          width={35}
                          height={35}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-2xl">{name}</p>
                        <p className="font-bold text-sm">{topic}</p>
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="subject-badge w-fit hidden md:block ">
                    {subject}
                  </div>
                  <div
                    className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                    style={{ backgroundColor: getSubjectColor(subject) }}
                  >
                    <Image
                      src={`/icons/${subject}.svg`}
                      alt={subject}
                      width={18}
                      height={18}
                    />
                  </div>
                </TableCell>
                <TableCell className="flex items-center gap-2 w-full">
                  <p className="max-md:hidden">
                    {duration} <span>mins</span>
                  </p>
                  <span className="md:hidden">{duration}</span>
                  <Image
                    src={`/icons/clock.svg`}
                    alt="minutes"
                    width={14}
                    height={14}
                    className="md:hidden"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>
    </>
  );
};

export default CompanionList;
