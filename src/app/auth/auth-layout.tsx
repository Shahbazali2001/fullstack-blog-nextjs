"use client";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
function AuthLayout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md p-5 bg-card rounded-lg shadow-sm border">
            <h1 className="text-3xl font-bold text-center mb-6">Welcome!</h1>

            <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2 w-full mb-4 gap-10">
                <TabsTrigger value="login">LogIn</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <LoginForm />
            </TabsContent>
            <TabsContent value="register">
                <RegisterForm />
            </TabsContent>        
            </Tabs>
      </div>
    </div>
  );
}

export default AuthLayout;
