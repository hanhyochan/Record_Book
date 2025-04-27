import { PurposeType } from '../types/input';
import { englishRegex } from './regex';

type ValidationFunction = (value: string) => string;

export const validationRules: Record<PurposeType, ValidationFunction> = {
  idInput: value => {
    if (value.trim() === '') {
      return '아이디를 입력해주세요.';
    } else if (value.length < 4 || value.length > 12) {
      return '아이디를 4자 이상 12자 이하로 입력해주세요.';
    } else if (!englishRegex.test(value)) {
      return '아이디는 영문자만 입력 가능합니다.';
    }
    return '';
  },

  pwInput: value => {
    if (value.trim() === '') {
      return '비밀번호를 입력해주세요.';
    } else if (value.length < 4 || value.length > 12) {
      return '비밀번호를 4자 이상 12자 이하로 입력해주세요.';
    } else if (!englishRegex.test(value)) {
      return '비밀번호는 영문자만 입력 가능합니다.';
    }
    return '';
  },

  postTitleInput: value => {
    if (value.trim() === '') {
      return '최소 1자 이상 입력해주세요.';
    }
    return '';
  },

  commentInput: value => {
    if (value.trim() === '') {
      return '댓글을 입력해주세요.';
    }
    return '';
  },

  postTextarea: value => {
    if (value.trim().length < 10) {
      return '최소 10자 이상 입력해주세요.';
    }
    return '';
  },
};
