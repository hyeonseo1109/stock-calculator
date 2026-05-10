import { supabase } from "@/shared/api";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

export const signUp = async (email: string, password: string) => {
  // 이메일 검사
  if (!emailRegex.test(email)) {
    throw new Error("이메일 형식이 올바르지 않습니다.");
  }

  // 비밀번호 검사
  if (!passwordRegex.test(password)) {
    throw new Error("비밀번호는 영문자와 숫자를 포함해야 합니다.");
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
};
