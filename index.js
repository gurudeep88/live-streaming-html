const startLiveStreaming = document.getElementById('start-live-streaming');
const stopLiveStreaming = document.getElementById('stop-live-streaming');

let token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY4ZDI0MGNjZThjNTlmOGQ1Yjk3MGY5ZTA4OGM1ZWQyYzAzOTllYWFlODZjZTc3ZDhlY2MyZDBkMTRlNzk0YTgiLCJ0eXAiOiJKV1QifQ.eyJjb250ZXh0Ijp7InVzZXIiOnsiaWQiOiJiYXVxMDczMyIsIm5hbWUiOiJoYW5kc29tZV9jYXB5YmFyYSJ9LCJncm91cCI6IjEifSwic3ViIjoia2RieGM4b2F5Z3hldmFtb2JsdXhveiIsInJvb20iOiIqIiwiaWF0IjoxNjkwMzc5MTkyLCJuYmYiOjE2OTAzNzkxOTIsImlzcyI6InNhcmlza2EiLCJhdWQiOiJtZWRpYV9tZXNzYWdpbmdfY28tYnJvd3NpbmciLCJleHAiOjE2OTA0NjU1OTJ9.wHyYU6MlQXrLps9GycRmD77n1iozlsYkFN66G9fN7n4KoupkK3WgNoxeRU-BBCRHJ8HbNKesAYKDwA3R-rBunaK6mvfhkG8oAwbNTqDkLTLykQ2BwQJm8zebOIGxwBuLBh-LqMG8OkwDjYG2SpxSAOIRaljsCx8Ge13ytiO9nP8exhD0AlzTlrxDOk_I13zYIARt_2XKakyfyQR110dZjiG-wuF7ApqPfxCiDJn5tvslZ7_-6MOn_Hu4AWd4X17m1gFwyvkF_5-H6PCJz-mMhVPz7Ie7Im3RgEW9WWtEoexnRlbqyuyu-JS86jB77opcjFE9Hw_pJJ0KxQKa1U_tyg';
console.log('tokne', token)
startLiveStreaming.onclick = async function(){
    const body = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            room_name: "live12"
        })
    }
   const response = await fetch('https://api.sariska.io/terraform/v1/hooks/srs/startRecording', body);
   if(response.ok){
    const json = await response.json();
    console.log('start', json);
    return json;
   }else{
    console.log('Error in starting live streaming');
   }
}

stopLiveStreaming.onclick = async function(){
    const body = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            room_name: "live12"
        })
    }
   const response = await fetch('https://api.sariska.io/terraform/v1/hooks/srs/stopRecording', body);
   const json = await response.json();
   console.log('stop', json);
   return json;
}
