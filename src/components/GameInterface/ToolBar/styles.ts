import {CSSProperties} from "react";

const useStyles = (): Record<string, CSSProperties> => ({
    root: {
      position: 'absolute',
      top: '50%',
      left: '20px',
      transform: 'translate(0, -50%)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 10
    },
    group: {
      boxShadow: '12px 0px 25px 4px rgba(34, 60, 80, 0.05)',
      marginBottom:'5px',
      background: "white",
    }
});

  export default useStyles