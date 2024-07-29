import { Slot, Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from 'stream-chat';

const client = StreamChat.getInstance('wfxy4f9quwxh');

export default function HomeLayout() {
    useEffect(() => {
      const connect = async () => {
        await client.connectUser(
            {
              id: 'jlahey',
              name: 'Jim Lahey',
              image: 'https://i.imgur.com/fR9Jz14.png',
            },
            'user_token',
          );
      }
    }, [])
    
    return <Slot />
}