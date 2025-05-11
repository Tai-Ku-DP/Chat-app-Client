import { useEffect } from "react";
import { Layout } from "~/components/layout";
import { useSocketContext } from "~/contexts/socket/SocketContext";

export default function Home() {
  const socket = useSocketContext();

  useEffect(() => {
    if (socket) {
      console.log("Render");
      socket.connect();

      socket.on("connected", () => {
        console.log("connected", { socketOd: socket.id });
      });

      socket.on("disconnect", () => {
        console.log("disconnect");
      });

      return () => {
        socket.off("SYNC_ACTIVITY_PAGE");
      };
    } else {
      return () => console.log("CLOSE");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div>content</div>
    </Layout>
  );
}
