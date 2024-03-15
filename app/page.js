require('dotenv').config()

import Signin from "./Components/Signin"
export default function Home() {
  return (
    <main >
      <Signin></Signin>
    </main>
  );
}
