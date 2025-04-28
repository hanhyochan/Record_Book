import { postType } from '../../../types/post';
import useUiState from '../../../store/useUiState';
import WriteBtnMobile from '../../common/button/WriteBtnMobile';

interface PostListTitleMobileProps {
  postListContents: postType[];
  loading: boolean;
}

const PostListTitleMobile = ({ postListContents, loading }: PostListTitleMobileProps) => {
  const togglePostWritePopup = useUiState(state => state.togglePostWritePopup);

  // 게시글 작성 팝업 오픈
  const openWritePopup = () => {
    togglePostWritePopup();
  };

  // 게시글 조회 팝업 오픈
  const openPostDetailPopup = async (id: string) => {
    togglePostDetailPopup();
    const response = await postDetailGetApi(id);
    if (response.status === 200) {
      const postDetailContents = response.data;
      setPostDetailContents(postDetailContents);
    }
  };

  // 날짜 포맷 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(2, 4);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <>
      <WriteBtnMobile onClick={openWritePopup} className="fixed bottom-[5rem] right-[3rem]">
        <img src="/icon/Pencil.svg" alt="연필 아이콘" width="24" height="24" />
      </WriteBtnMobile>
      <div className="w-[100%] h-[100%] flex flex-col">
        <div className="w-[100%] h-[8rem] flex items-center">
          <p className="text-[2rem] font-bold leading-[160%] tracking-[-0.3%]">게시판</p>
        </div>
        {postListContents.map((post, index) => (
          <div
            onClick={() => openPostDetailPopup(post.id)}
            key={`${post.id}-${index}`}
            className="flex items-center justify-between h-[8rem] border-b-[0.1rem] border-[#EEEFF1]"
          >
            <div className="flex flex-col gap-[1rem]">
              <p className="text-[1.6rem] font-bold leading-[160%] tracking-[-0.3%]">
                {post.title}
              </p>
              <div className="flex gap-[1.3rem]">
                <p className="text-[1.4rem] font-regular text-[#A7A9B4]">
                  {formatDate(post.createdAt)}
                </p>
                <div className="flex gap-[0.5rem]">
                  <img src="/icon/Comments.svg" alt="댓글아이콘" width="20" height="20" />
                  <p className="text-[1.4rem] font-regular text-[#A7A9B4]">{post.commentCount}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[0.7rem]">
              <div className="w-[2.4rem] h-[2.4rem] bg-[#A7A9B4] rounded-[50rem]"></div>
              <p className="font-regular text-[1.4rem] leading-[150%] tracking-[-0.3%]">
                멋진무지개
              </p>
            </div>
          </div>
        ))}
        {loading && <p className="text-center py-4">Loading...</p>}
      </div>
    </>
  );
};

export default PostListTitleMobile;
