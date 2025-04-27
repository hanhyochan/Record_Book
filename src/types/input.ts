// Input 컴포넌트에서 사용되는 타입 정의
export type PurposeType =
  | 'idInput'
  | 'pwInput'
  | 'postTitleInput'
  | 'commentInput'
  | 'postTextarea';

// Input 컴포넌트 props
export interface InputProps {
  purpose: PurposeType;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

// 유효성 커스텀 훅 props
export interface UseValidationProps {
  Purpose?: PurposeType;
  value: string;
}
