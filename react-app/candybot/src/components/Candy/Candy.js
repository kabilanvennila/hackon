import { useEffect ,useRef} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

function Candy() {

  // const alanBtnContainer = useRef();

  useEffect(() => {
    alanBtn({
      // key: '4a59123c3ca3b317b8ced81dcc5ff4452e956eca572e1d8b807a3e2338fdd0dc/stage',
      key: '4d292cf043b0a2ea4d0bf347580da6fd2e956eca572e1d8b807a3e2338fdd0dc/prod',
      // rootEl: alanBtnContainer.current,
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          //call client code that will react to the received command
        }
      }
    });
  }, []);

  return null;
}

export default Candy;
