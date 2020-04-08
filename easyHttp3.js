class EasyHTTP {
  //make an HTTP get Request
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }
  //make http post request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  }

  //make http PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  }

  //make an http DELETE request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });
    const responseData = await "Resource Deleted ...";
    return responseData;
  }
}
