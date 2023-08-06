"use client";
import { useState, useEffect } from "react";

const Test = () => {
  const [spename, setSpename] = useState();
  const [spevalue, setSpevalue] = useState("");
  const [specifications, setSpecifications] = useState({});
  console.log(specifications);

  useEffect(() => {
    if (spename || spevalue) {
      const spesObj = {
        [spename]: spevalue,
      };
      // setSpecifications();
      setSpecifications(spesObj);
      console.log(specifications);
    }
  }, [spename, spevalue]);
  return (
    <div>
      <label className="mb-1">Car specifications</label>
      <div className="flex">
        <input
          className="rounded mb-2 border-solid border "
          type="text"
          name="spename"
          onChange={(e) => setSpename(e.target.value)}
        ></input>
        <input
          className="rounded mb-2 border-solid border "
          type="text"
          name="spevalue"
          onChange={(e) => setSpevalue(e.target.value)}
        ></input>
      </div>
      {/* <div className="flex">
        <input
          className="rounded mb-2 border-solid border "
          type="text"
          name="spe1name"
        ></input>
        <input
          className="rounded mb-2 border-solid border "
          type="text"
          name="spe1value"
          onChange={(e) =>
            setSpecifications({ ...specifications, size: e.target.value })
          }
        ></input>
      </div> */}
    </div>
  );
};

export default Test;

/*
<Input 
type="text"
inputSize="small"
className={"rounded mb-3"} 
error = {false} 
fullWidth = {true}
haveLabel = {false} 
name = "spename"
register={register}
onchange={(e) =>
  setSpename(e.target.value )
}
></Input>
<Input 
type="text"
inputSize="small"
className={"rounded mb-3"} 
error = {false} 
fullWidth = {true}
haveLabel = {false} 
name = "spevalue"
register={register}
onchange={(e) =>
  setSpevalue(e.target.value )
}
></Input>
</div> */

//   const router = useRouter();
// const { param } = router.query;
// const [dataa, setDataa] = React.useState({})

//  const location = useLocation();
//   const id = Location.state.ID;

//   useEffect(() => {
//     console.log(id) ;
// },[]);

// dataa={param}

// useEffect(() => {
//   if (myData) setDataa(JSON.parse(myData));
// }, [router.query]);
