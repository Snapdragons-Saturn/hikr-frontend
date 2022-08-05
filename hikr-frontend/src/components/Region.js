import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const Region = () => {
  const { name } = useParams;
  const [region, setRegion] = useState();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    axios.get(``).then((res) => {
      setRegion(res.data);
    });
  }, [name]);

  const showEdit = () => {
    setEdit(false)
  }

  const showRegions = () => {
    setEdit(true)
  }

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(``, region);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(``, region)
    };

  let regionList = region.map((e) => {
    return (
      <div className="regionMap" key="">
        
      </div>

    );
  });
{edit ? (
  <div>{regionList}</div>
) : (
    <div>

    </div>
)
}
}
export default Region;

//
