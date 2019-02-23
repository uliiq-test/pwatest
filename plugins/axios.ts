export default function({ $axios }) {
　//TODO:最終的にVuexを使ってユーザ事に各自発行されているトークンを使えるようにする。
  //現状は環境変数のTOKENにトークン値が設定されていたら、API通信時にトークンの情報を使って通信するようにしている。
  const TOKEN = `c66c5b915c284608a9450657e3fb500d80962b40`;
  $axios.onRequest(config => {
    if (TOKEN) {
      config.headers.common['Authorization'] = TOKEN;
    }
  });

  // インターセプターでrequet/responsのログを出力
  $axios.interceptors.request.use(request => {
    console.log('Starting Request: ', request)
    return request
  });
  $axios.interceptors.response.use(response => {
    console.log('Response: ', response)
    return response
  });
}