const featureElement = document.getElementById("premium-feature");

const title = document.createElement('h3')
title.innerHTML = "Premium Feature"
featureElement.append(title);
featureElement.append("This feature if only for Premium Users please contact us to upgrade your account");
featureElement.append("(別途用意するサーバーにAPIを発信して結果を表示するイメージ)");
console.log("premium");