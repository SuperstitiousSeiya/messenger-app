import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PhoneIcon, SendIcon, VideoIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function MessageBoxPage() {
  return (
    <div className="h-full flex flex-col justify-between overflow-y-auto">
      <div className="p-3 flex border-b items-stretch md:p-4 lg:p-6">
        <div className="flex items-center gap-2">
          <Avatar className="border w-10 h-10 md:w-12 md:h-12">
            <Image
              src="/placeholder.svg"
              alt="Image"
              width={1000}
              height={1000}
            />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Active 2h ago
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Call</span>
            <PhoneIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <span className="sr-only">Video call</span>
            <VideoIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid gap-4 p-3 md:p-4 lg:p-6 max-h-auto  overflow-y-auto">
        <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          Hey hope you&apos;re doing well! We should catch up sometime soon. 🙏
        </div>
        <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          Hey hope you&apos;re doing well! We should catch up sometime soon. 🙏
        </div>
        <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          Hey hope you&apos;re doing well! We should catch up sometime soon. 🙏
        </div>


        <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          Hey hope you&apos;re doing well! We should catch up sometime soon. 🙏
        </div>
        <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          Hey hope you&apos;re doing well! We should catch up sometime soon. 🙏
        </div>
        <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          Hey hope you&apos;re doing well! We should catch up sometime soon. 🙏
        </div>
        <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          Hey hope you&apos;re doing well! We should catch up sometime soon. 🙏
        </div>

        <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          Hey hope you&apos;re doing well! We should catch up sometime soon. 🙏
        </div>
        <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          Hey hope you&apos;re doing well! We should catch up sometime soon. 🙏
        </div>

        <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-full px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800">
          Sure! I&apos;m free this weekend if you want to grab a coffee.
        </div>
        <div className="flex w-max max-w-[65%] min-h-[200px] md:max-w-[50%] flex-col gap-2 rounded-xl overflow-hidden text-sm ml-auto">
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="photo"
            width={200}
            height={150}
            className="object-cover"
          />
        </div>
        <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          Sounds good! Let&apos;s meet at the Starbucks on 5th Ave.
        </div>
        <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-full px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800">
          I&apos;ll message you on Saturday.
        </div>
      </div>
      <div className="border-t">
        <form className="flex w-full items-center space-x-2 p-3 md:p-4 lg:p-6">
          <Input
            id="message"
            placeholder="Type your message..."
            className="flex-1"
            autoComplete="off"
          />
          <Button type="submit" size="icon">
            <span className="sr-only">Send</span>
            <SendIcon className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
