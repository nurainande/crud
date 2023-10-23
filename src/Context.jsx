import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const x=3;
const y = 2
const initialState ={
    name:'',
    day:''
}

function AppContextProvider({children}) {
    const [state, setState] = useState(initialState);

    const [name, setName] = useState("");
    const [day, setDay] = useState("");
    const [obj, setObj] = useState({});

    function handleSubmitReg(e) {
      e.preventDefault();
      if (!name && !day) return;
      setObj({ ...obj, name, day });
      setState(obj)
    //   return obj;
      console.log(obj);
    }

    return (
      <AppContext.Provider
        value={{
          x,
          y,
          state,
          setState,
          name,
          setName,
          day,
          setDay,
          obj,
          setObj,
          handleSubmitReg,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

function useAppContext(){
    const context = useContext(AppContext);
    if (context === undefined) throw new Error("Post context was used outside of the post provider");
    return context
}

export { AppContextProvider, useAppContext }
