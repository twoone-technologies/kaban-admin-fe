import { StarIcon, HalfStarIcon } from '@/public/icons';

export default function Rating({ num }: { num: number | undefined }) {
  if (num === undefined) return null;
  const numArr = [1, 2, 3, 4, 5];
  return (
    <div className="flex">
      {numArr.map((number) => {
        if (number <= num) {
          return <StarIcon key={number} className='text-yellow-500'/>
        } else if (number - 0.5 === num) {
          return <HalfStarIcon key={number} className='text-cyan-500' />
        } else {
          return <StarIcon key={number} className='text-background' />;
        }
      })}
    </div>
  );
}
