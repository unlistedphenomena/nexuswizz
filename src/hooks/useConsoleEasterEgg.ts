import { useEffect } from "react"

export const useConsoleEasterEgg = () => {
  useEffect(() => {
    console.log(`
The Merge is complete.

🐼🐼🐼🐼🐼🐼🐼🐼🐼🐼🐼🐼🐼🐼

Welcome to a greener Ethereum.

🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳

Come help us build it: https://nexus.org/en/contributing
    `)
  })
}
