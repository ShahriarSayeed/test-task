const setApiUrlBase=()=>{
  if (process.env.NODE_ENV==='development'){
    return 'http://localhost:8000';
  }
  else if (process.env.NODE_ENV==='production'){
    return 'http://production-server.com';
  }
}

export const API_URL_BASE=setApiUrlBase();
