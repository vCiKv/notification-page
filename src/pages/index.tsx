import Head from "next/head";
import Image from "next/image";
import { type } from "os";
import { Children } from "react";

const Notification = (props: { newNotifications: number }) => {
  const notificationList = [
    {
      person: "mark webber",
      personUrl: "mark-webber",
      time: "1m ago",
      type: "reaction",
      isDirect: false,
      isNew: true,
      postObject: "My first tournament today",
    },
    {
      person: "angela gray",
      personUrl: "angela-gray",
      time: "5m ago",
      type: "follow",
      isDirect: false,
      isNew: true,
      postObject: "",
    },
    {
      person: "jacob thompson",
      personUrl: "jacob-thompson",
      time: "1 day ago",
      type: "groupJoin",
      isDirect: false,
      isNew: true,
      postObject: (
        <span className="text-info-blue font-extrabold">Chess Club</span>
      ),
    },
    {
      person: " Rizky Hasanuddin",
      personUrl: "rizky-hasanuddin",
      time: "5 days ago",
      type: "direct",
      isDirect: true,
      isNew: false,
      postObject:
        "  Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
      person: "Kimberly Smith",
      personUrl: "kimberly-smith",
      time: "1 weeks ago",
      type: "comment",
      isDirect: false,
      isNew: false,
      isImage:true,
      postObject: (
        <div className="h-20 w-20 block">
          <img src="/images/image-chess.webp" />
        </div>
      ),
    },
    {
      person: "Nathan Peterson",
      personUrl: "nathan-peterson",
      time: "2 weeks ago",
      type: "reaction",
      isDirect: false,
      isNew: false,
      postObject: "5 end-game strategies to increase your win rate",
    },
    {
      person: "anna kim",
      personUrl: "anna-kim",
      time: "2 weeks ago",
      type: "groupLeave",
      isDirect: false,
      isNew: false,
      postObject: (
        <span className="text-info-blue font-extrabold">Chess Club</span>
      ),
    },
  ];
  return (
    <div className="p-4">
      <div className="flex flex-nowrap justify-between">
        <p className="font-extrabold my-4">
          Notifications{" "}
          <span className="bg-info-blue text-white px-3 py-1 rounded-md mx-3">
            {props.newNotifications}
          </span>
        </p>
        <p className="my-4 cursor-pointer">Mark all as read</p>
      </div>
      <div>
        {notificationList.map((notification) => (
          <NotificationGeneral
            key={notification.person}
            person={notification.person}
            personUrl={notification.personUrl}
            postObject={notification.postObject}
            time={notification.time}
            isDirect={notification.isDirect}
            isNew={notification.isNew}
            isImage={notification.isImage??false}
            type={
              notification.type as
                | "reaction"
                | "comment"
                | "groupJoin"
                | "groupLeave"
                | "follow"
                | "direct"
            }
          />
        ))}
      </div>
    </div>
  );
};
const NotificationPerson = (props: {
  children: React.ReactNode;
  person: string;
  personUrl: string;
  time: string;
  isNew?: boolean;
  direct?: React.ReactNode;
  isImage?:React.ReactNode
}) => {
  const bgColor = !props.isNew ? "bg-transparent" : "bg-light-blue";
  return (
    <div>
      <div
        className={
          "my-3 flex flex-nowrap justify-center items-start p-5 gap-x-5 rounded-md " +
          bgColor
        }
      >
        <div className="h-12 w-12 ">
          <img
            alt=""
            width={"100%"}
            height={"100%"}
            src={"/images/avatar-" + props.personUrl + ".webp"}
          />
        </div>
        <div className="w-full">
          <div>
            <strong className="font-extrabold capitalize text-black">
              {props.person}
            </strong>{" "}
            <span className="">{!props.isImage? props.children : null} </span>
            <>
              {!props.isNew ? null : (
                <span className="inline-block h-2 w-2 rounded-full bg-notice-red"></span>
              )}
            </>
          </div>
          <span className="opacity-60">{props.time}</span>
          {props.direct ?? null}

        </div>
        <span className="">{!props.isImage? null : props.children} </span>


      </div>
    </div>
  );
};
const NotificationGeneral = (props: {
  person: string;
  personUrl: string;
  time: string;
  postObject: React.ReactNode;
  type:
    | "reaction"
    | "comment"
    | "groupJoin"
    | "groupLeave"
    | "follow"
    | "direct";
  isNew?: boolean;
  isDirect?: boolean;
  isImage?:boolean
}) => {
  const Direct = (props: { msg: React.ReactNode }) => {
    return (
      <div className="w-full border p-5 my-3 border-slate-500 rounded-md">
        <p>{props.msg}</p>
      </div>
    );
  };
  let typeText = "followed you";
  if (props.type === "reaction") {
    typeText = "reacted to your recent post";
  }
  if (props.type === "comment") {
    typeText = "commented on your picture";
  }
  if (props.type === "groupJoin") {
    typeText = "joined your group";
  }
  if (props.type === "groupLeave") {
    typeText = "left the group";
  }

  const postText = (
    <>
      {typeText + " "}
      {<span className="font-extrabold">{props.postObject}</span>}
    </>
  );

  return (
    <NotificationPerson
      person={props.person}
      personUrl={props.personUrl}
      isNew={props.isNew}
      time={props.time}
      isImage={false}
      direct={props.isDirect ? <Direct msg={props.postObject} /> : undefined}
    >
      <>{props.isDirect ? "sent you a private message" : postText}</>
    </NotificationPerson>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Notification Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="mx-auto container">
          <Notification newNotifications={3} />
        </section>
      </main>
    </>
  );
}
