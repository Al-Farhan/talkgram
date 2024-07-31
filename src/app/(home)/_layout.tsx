import ChatProvider from "@/src/providers/ChatProvider";
import { Stack } from "expo-router";
import { StreamChat } from "stream-chat";

export default function HomeLayout() {

  return (
    
        <ChatProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </ChatProvider>
  );
}
