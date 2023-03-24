import { Select } from "./style";
import { useEffect, useState } from 'react';

interface Time {
  id: number;
  nome_popular: string;
}

interface TimeSelectProps {
  selectedTimeId: number | string;
  name: string;
  validates: any;
}

const SelectType: React.FC<TimeSelectProps> = ({ selectedTimeId, name, validates }) => {
  // const [times, setTimes] = useState<Time[]>([]);

  // useEffect(() => {
  //   async function fetchTimes() {
  //     const response = await fetch(
  //       "https://api.api-futebol.com.br/v1/campeonatos/10/tabela",
  //       {
  //         headers: {
  //           Authorization: "Bearer live_09a191b0276fdae970cd9d7c2b8e64",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const data = await response.json();


  //     console.log(data);



  //     let result = await data.map(({ time }: any) => time)
  //     let times = await result.map(({ time_id, nome_popular }: any) => ({ time_id, nome_popular }));
  //     setTimes(times);
  //   }
  //   fetchTimes();
  // }, []);

  const timesCreate = [
    'América-MG',
    'Athletico-PR',
    'Atlético-MG',
    'Bahia',
    'Botafogo',
    'Bragantino',
    'Corinthians',
    'Coritiba',
    'Cruzeiro',
    'Cuiabá',
    'Flamengo',
    'Fluminense',
    'Fortaleza',
    'Goiás',
    'Grêmio',
    'Internacional',
    'Palmeiras',
    'Santos',
    'São Paulo',
    'Vasco',
  ]

  return (
    <>
      <Select name={name} {...validates}>

        <option value="">Selecione um time</option>
        {timesCreate.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}

      </Select>
    </>

  );
};

export default SelectType;

