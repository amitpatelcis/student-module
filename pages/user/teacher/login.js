import Logo from "../../../assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const teacherLogin=()=>{
      router.push("./dashboard");
  }
  return (
    <>
        <div className="bg-[#e3f2fd] min-h-screen p-12 flex justify-center text-slate-800 items-center">
          <div className="bg-white p-10 rounded-lg text-center w-full h-full md:w-1/2 lg:w-1/3 border border-[#bee1fa]">
              <div className="font-bold text-lg my-4 flex justify-center items-center gap-1">
                <div className="flex justify-center"><Image src={Logo} width="25" height="25"/></div>
                <div className="flex justify-center">KAPABLE</div>
              </div>
              <div className="text-[#673ab7] font-bold text-2xl my-4">Teacher Login</div>
              <div className="text-slate-400 text-lg my-4">Enter your credentials to continue</div>
              <div className="text-left my-4">
                <label className="text-slate-400 text-sm">Enter your email address
                <input id="email" type="email" className="w-full py-2 px-2 bg-[#fafafa] rounded-lg border border-slate-300 outline-[#673ab7] text-base text-[#673ab7]" placeholder="abc123@gmail.com"/>
                </label>
              </div>
              <div className="text-left my-4">
                <label className="text-slate-400 text-sm">Password
                <input type="password" className="w-full py-2 px-2 bg-[#fafafa] rounded-lg border border-slate-300 outline-[#673ab7] text-base text-[#673ab7]"/>
                </label>
              </div>
              <div><button className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]" onClick={teacherLogin}>Login</button></div>
          </div>
        </div>
    </>
  )
}