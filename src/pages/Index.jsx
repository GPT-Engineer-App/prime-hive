import React, { useState } from "react";
import { Box, Button, Container, Heading, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    setIsCalculating(true);
    // ここにメルセンヌ素数を計算するロジックを実装します。
    // 実際の計算はサーバー側で行われ、結果がクライアントに返される想定です。
    // サンプルでは、計算の模擬としてToastを使っています。

    // Toastを表示して計算が完了したことをユーザーに通知します。
    toast({
      title: "計算完了！",
      description: "新しいメルセンヌ素数が見つかりました。",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    // 計算状態をリセットします。
    setIsCalculating(false);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          メルセンヌ素数生成サイト
        </Heading>
        <Text>このサイトでは、メルセンヌ素数を放置して自動で生成できます。下のボタンを押すと、 計算に貢献することができます。</Text>
        <Button leftIcon={<FaCalculator />} colorScheme="teal" isLoading={isCalculating} loadingText="計算中" onClick={handleCalculate}>
          計算に貢献する
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
