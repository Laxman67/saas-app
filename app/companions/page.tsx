import { getAllCompanions } from '@/lib/actions/companions-action';

const CompanionLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';
  const companions = await getAllCompanions({ topic, subject });
  console.log(companions);

  return <div>Companion Library</div>;
};

export default CompanionLibrary;
