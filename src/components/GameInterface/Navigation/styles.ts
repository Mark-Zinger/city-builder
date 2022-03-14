import {CSSProperties} from "react";

const useStyles = (): Record<string, CSSProperties> => ({
    root: {
      position: 'absolute',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      zIndex: 10
    },
    group: {
      borderRadius: 1,
    }
});

  export default useStyles