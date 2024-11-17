

const initialstate=0;
 

const ChangeNumber=(State=initialstate,action)=>{

    switch(action.type){

        case "INCREMENT" : return State+ 1;
        case "DICREMENT" : return State-1;
        default : return State
    }

}

export default ChangeNumber;