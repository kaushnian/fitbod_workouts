import Image from 'next/image';

export type ExerciseItem = {
  id: string;
  name: string;
  muscle: string;
  image: string;
};

type ExerciseListItemProps = {
  data: ExerciseItem;
};

export default function ExerciseListItem({ data }: ExerciseListItemProps) {
  return (
    <li className="">
      <a href={`/exercises/${data.id}`} className="flex gap-x-6">
        <div className="w-[60px] h-[60px] relative">
          <Image src={data.image} alt={data.name} layout="fill" priority />
        </div>

        <div className="flex grow flex-col justify-between">
          <strong className="text-base">{data.name}</strong>
          <p>{data.muscle}</p>
        </div>

        <Image
          src="https://storage.googleapis.com/fitbod-web-internal/arrow-right.svg"
          width={20}
          height={36}
          alt="Arrow"
        />
      </a>
    </li>
  );
}
