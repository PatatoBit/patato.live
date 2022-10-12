import { useEffect, useState } from "react";

export function useAge(): string {
  const [age, setAge] = useState("");

  setInterval(() => {
    const time =
      (new Date().getTime() - new Date(1206835200000).getTime()) /
      (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
    setAge(time.toString().substring(0, 11));
  }, 10);

  return age;
}
