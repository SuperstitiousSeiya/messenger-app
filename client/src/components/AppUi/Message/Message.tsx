import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"

export default function Message() {
  return (
    <div className="w-full h-full flex flex-col md:grid md:grid-cols-[300px_1fr] max-w-4xl mx-auto rounded-lg overflow-hidden border">
      <div className="bg-gray-100/20 p-3 border-r dark:bg-gray-800/20 md:p-4 lg:p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="font-medium text-sm">Messenger</div>
          <Button variant="ghost" size="icon" className="rounded-full w-8 h-8">
            <PenIcon className="h-4 w-4" />
            <span className="sr-only">New message</span>
          </Button>
        </div>
        <div className="py-4 md:py-6">
          <form>
            <Input placeholder="Search" className="h-8 w-full" />
          </form>
        </div>
        <div className="grid gap-2 md:gap-3 lg:gap-4">
          <Link
            href="#"
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100/50 bg-gray-100 dark:hover:bg-gray-800/50 dark:bg-gray-800"
            prefetch={false}
          >
            <Avatar className="border w-10 h-10 md:w-12 md:h-12">
              <Image src="/placeholder.svg" alt="Image" width={50} height={50} />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5">
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">hey what&apos;s going on? &middot; 2h</p>
            </div>
          </Link>

        </div>
      </div>
      <div>
        <div className="p-3 flex border-b items-center md:p-4 lg:p-6">
          <div className="flex items-center gap-2">
            <Avatar className="border w-10 h-10 md:w-12 md:h-12">
              <Image src="/placeholder.svg" alt="Image"  width={1000} height={1000} />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5">
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Active 2h ago</p>
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
        <div className="grid gap-4 p-3 md:p-4 lg:p-6 max-h-[40rem] overflow-y-auto">
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
          <div className="flex w-max max-w-[65%] md:max-w-[50%] flex-col gap-2 rounded-xl overflow-hidden text-sm ml-auto">
            <Image src="/placeholder.svg" alt="photo" width={200} height={150} className="object-cover" />
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
            <Input id="message" placeholder="Type your message..." className="flex-1" autoComplete="off" />
            <Button type="submit" size="icon">
              <span className="sr-only">Send</span>
              <SendIcon className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

function PenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function VideoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}