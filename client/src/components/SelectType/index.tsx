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
  const [times, setTimes] = useState<Time[]>([]);

  useEffect(() => {
    async function fetchTimes() {
      const response = await fetch(
        "https://api.api-futebol.com.br/v1/campeonatos/10/tabela",
        {
          headers: {
            Authorization: "Bearer live_09a191b0276fdae970cd9d7c2b8e64",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      
      
      let result = await data.map(({ time }: any) => time)
      let times = await result.map(({ time_id, nome_popular }: any) => ({ time_id, nome_popular }));
      setTimes(times);
    }
    fetchTimes();
  }, []);

 

  return (
    <>
        <Select name={name} {... validates}>

        <option value="">Selecione um time</option>
        {times.map((time) => (
            <option key={time.nome_popular} value={time.nome_popular}>
            { time.nome_popular }
            </option>
        ))}

        </Select>
    </>
    
  );
};

export default SelectType;

