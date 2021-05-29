import { Line, CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend} from "recharts";
import './Graph.css';
import React,{ useState, useEffect } from 'react';


function Graph() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = () => {
    fetch(`https://nenoc.pythonanywhere.com/api/Apis/`)
      .then(response => response.json())
      .then(json => setData(json))
  } 

  return (
    <div className="Graph">
    {/* height="99%" width="99%"  */}
      <ResponsiveContainer width="100%" height="75%" aspect = {2.5}>
      <LineChart
         width={500}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 50,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical=""/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Legend />
          <Line datakey="active" type="monotone" dataKey="country" stroke="#0FFFFF" dot={false}/> 
          <Line datakey="active" type="monotone" dataKey="countper100k" stroke="#808B96" dot = {false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;