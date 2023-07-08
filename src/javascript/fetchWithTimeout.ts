/*

Implement fetch with timeout

*/

export const fetchWithTimeOut = (url: string, timeout: number) => {
  return new Promise(async (resolve, reject) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let controller = new AbortController();
    try {
      timeoutId = setTimeout(() => {
        controller.abort();
      }, timeout);

      let res = await fetch(url, { signal: controller.signal });

      if (timeoutId) clearTimeout(timeoutId);
      let data = await res.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

fetchWithTimeOut("https://jsonplaceholder.typicode.com/todos/1", 200)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
