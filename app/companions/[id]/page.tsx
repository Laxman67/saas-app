import { getCompanion } from '@/lib/actions/companions-action';
import { getSubjectColor } from '@/lib/utils';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';

interface CompanionSessionPageProps {
  params: Promise<{ id: string }>;
}

//params -->  /url/{id}
// searchParams ---> /url?key=basic

const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
  const { id } = await params;

  const companion = await getCompanion(id);
  const { name, topic, subject, duration } = companion;
  const user = await currentUser();

  if (!user) redirect('/sign-in');
  if (!companion) redirect('/companions');
  return (
    <main>
      <article className="flex rounded-border justify-between p-6 max-md:flex-col">
        <div className="flex items-center gap-2">
          <div
            className="size=[72px] flex items-center justify-center rounded-lg max-md:hidden p-3"
            style={{ background: getSubjectColor(companion.subject) }}
          >
            <Image
              alt=""
              width={35}
              height={35}
              src={`/icons/${companion.subject}.svg`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="font-bold text-2xl">{name}</p>
              <div className="subject-badge max-sm:hidden">{subject}</div>
            </div>
            <p className="text-lg">{topic}</p>
          </div>
        </div>
        <div className="items-start text-2xl max-md:hidden">
          {duration} minutes
        </div>
      </article>
    </main>
  );
};

export default CompanionSession;
