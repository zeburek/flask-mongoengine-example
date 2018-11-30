export const host = window.ENV_HOST ? window.ENV_HOST:"http://localhost:4000";
export const jsonHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
export const status = (response) => {  
  if (response.status >= 200 && response.status < 300) {  
    return Promise.resolve(response)  
  } else {  
    return Promise.reject(new Error(response.statusText))  
  }  
};

export const subscriptionsList = () => fetch(`${host}/subscriptions`).then(status)
export const subscriptionCreate = (data) => fetch(`${host}/subscriptions`, {method: 'POST', headers: jsonHeaders, body: JSON.stringify(data)}).then(status)
export const subscriptionsDelete = () => fetch(`${host}/subscriptions`, {method: 'DELETE'}).then(status)
