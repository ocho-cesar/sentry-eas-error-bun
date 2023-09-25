import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://0bd57d8546e7b69bf4bfa061ed549eed@o689491.ingest.sentry.io/4505942760620032",
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

export default function App() {
  useEffect(() => {
    Sentry.Native.captureEvent({
      message: "My first Sentry native event!",
      level: Sentry.Severity.Info,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
