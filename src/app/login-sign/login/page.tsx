"use client"

import { useState } from "react";

type formdata = {
    username : string;
    email : string;
    password : string;
    age : number;
}
/*
``` |

Without the generic `<formdata>`, TypeScript will try to **infer** the type from your initial value. But if you're starting with something empty (like `""` or `{}`), inference can be **wrong or too loose**.

---

### ✅ Why we should use `<formdata>`:
1. ✅ Enforces the correct shape for `data`
2. ✅ Gives you full IntelliSense when accessing `data.username`, etc.
3. ❌ Prevents accidentally setting wrong types (e.g., age as a string)
4. ✅ Helps during refactoring / scaling — changes to `formdata` type automatically propagate

---

### 👇 Example Without Type (Bad for Safety)

``` */


function Login(){
    const [data, setData] = useState <formdata>({
        username : "",
        email : "",
        password : "",
        age : 0
    })
    
    return(
        <div className="bg-green-950 w-screen relative h-screen flex flex-col content-center justify-center items-center">
            <h1 className="text-4xl font-bold antialiased text-white/80">login page jai bhai</h1>

            <div className="flex flex-col">
                <h1>Login form</h1>
                <form className="flex flex-col m-5 p-5">

                    <label>Username:
                        <input 
                        type="text"
                        name = "username"
                        value={data.username}
                        onChange={(e) =>
                            setData((prev) => ({
                              ...prev,
                              [e.target.name]: e.target.name === 'age' ? +e.target.value : e.target.value,
                            }))
                          }
                          
                        ></input>
                    </label>

                    <label>Username:
                        <input 
                        type="text"
                        name = "email"
                        value={data.email}
                        onChange={(e) =>
                            setData((prev) => ({
                              ...prev,
                              [e.target.name]: e.target.name === 'age' ? +e.target.value : e.target.value,
                            }))
                          }
                          
                        ></input>
                    </label>

                    <label>Username:
                        <input 
                        type="number"
                        name = "age"
                        value={data.age}
                        onChange={(e) =>
                            setData((prev) => ({
                              ...prev,
                              [e.target.name]: e.target.name === 'age' ? +e.target.value : e.target.value,
                            }))
                          }
                          
                        ></input>
                    </label>
                </form>
                <h1>what you type in place of username: {data.username}</h1>
            </div>
        </div>
    )
}
export default Login;