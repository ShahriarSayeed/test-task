const setApiUrlBase=()=>{
  if (process.env.NODE_ENV==='development'){
    return 'https://randomuser.me';
  }
  else if (process.env.NODE_ENV==='production'){
    return 'https://randomuser.me';
  }
}

export const API_URL_BASE=setApiUrlBase();
