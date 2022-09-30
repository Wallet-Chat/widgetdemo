# WalletChat Widget Demo

Live version at: https://demo.walletchat.fun/widget

Youtube demo: https://www.youtube.com/watch?v=SlqW3zGNsto

## Who is this for

- You are a web3 web app that wishes integrate messaging functionality
- Replace current user-to-user or user-to-app messaging workflow which happen inside discord / telegram
- Provide a much better UX that links directly to the user's wallet, which they are already using to interact with your dapp
- Provide a much more secure experience than having to share one's wallet id inside discord or using external links
- Enable users to communicate without leaving your web app (increasing engagement & time spent within the app)
- Differentiate yourself from the competition

## Custom Integration Steps

1) Include *src/components/WalletChat/*, and *src/compoments/ButtonOverlay/* in your source

2) On any page you wish to have the chat widget active, include: 

```import WalletChatWidget from '/components/WalletChat/WalletChat'```

And include in your page source: 

```<WalletChatWidget />```

Please see src/page/widget.js for a simple example of the integration of step 2)

Feel free to reach out to contact@walletchat.fun for any help, or on Twitter https://twitter.com/wallet_chat

## Coming Soon: npm package for easy install!

Developed with ❤ by https://www.walletchat.fun/
