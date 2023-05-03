import { TailSpin } from 'react-loader-spinner';

interface LoadingProps {
  load: boolean;
}

export function Loading({ load }: LoadingProps) {
  if (load) {
    return (
      <div className="fixed z-50 flex flex-col gap-2 items-center justify-center h-screen w-full bg-white bg-opacity-75">
        <TailSpin
          height="40"
          width="40"
          color="#000000"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <h3 className="font-medium text-lg">Carregando</h3>
      </div>
    );
  }

  return <></>;
}
