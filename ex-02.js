async function getUserInfo() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    nome: "Hëndy",
    idade: 37,
    email: "hendyvorpagel@gmail.com"
  };
}

async function mostrarUserInfo() {
  try {
    const userInfo = await getUserInfo();
    console.log("Informações do Usuário:", userInfo);
  } catch (error) {
    console.error("Erro ao obter informações do usuário:", error);
  }
}

mostrarUserInfo();
