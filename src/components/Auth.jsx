import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

function Auth() {

const [user,setUser] = useState(null);

useEffect(()=>{

supabase.auth.getUser()
.then(({data})=>{
setUser(data.user);
});

},[]);

const signIn = async ()=>{

await supabase.auth.signInWithOAuth({
provider:"google"
});

};

const logout = async ()=>{
await supabase.auth.signOut();
location.reload();
};

if(user){

return(

<div>

<img
src={user.user_metadata.avatar_url}
width="40"
/>

<p>
{user.user_metadata.full_name}
</p>

<button onClick={logout}>
Logout
</button>

</div>

);

}

return(

<button onClick={signIn}>
Sign in with Google
</button>

);

}

export default Auth;