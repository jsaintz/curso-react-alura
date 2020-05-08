import M from 'materialize-css';

const PopUp = {
  exibeMensagem: (status, msg) => {
    if (status === 'success') {
      M.toast({ html: msg, classes: "green", displayLenght: 2000 });
    }

    if(status === 'error'){
      M.toast({ html: msg, classes: "red", displayLenght: 2000 });
    }
  }
};

export default PopUp;