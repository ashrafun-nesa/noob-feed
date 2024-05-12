import { memo } from "react";
type Props = {};
function YoutubeIcon(props: Props) {
  return (
    <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5457 0.578478C6.46633 0.67296 3.88753 0.895271 3.03163 1.21206C1.79781 1.67892 1.00305 2.69043 0.714045 4.18547C0.0693436 7.47011 0.113806 14.3729 0.791853 17.1629C1.09197 18.3745 1.96454 19.3526 3.10944 19.7528C4.43219 20.2085 9.26189 20.4531 15.909 20.3975C21.1777 20.3475 24.0067 20.1974 25.4406 19.8806C26.4854 19.6472 27.408 18.9136 27.8637 17.9409C28.2917 17.0406 28.5196 15.3177 28.6474 12.0886C28.7641 9.09854 28.5473 5.4582 28.1527 3.852C27.9415 2.99055 27.458 2.22914 26.8189 1.74561C26.3131 1.36768 25.774 1.15093 25.0015 1.01754C22.7339 0.628498 16.3925 0.439533 10.5457 0.578478ZM15.2921 8.30933C17.2651 9.44312 18.9157 10.3991 18.9491 10.4324C19.0047 10.4824 18.1877 10.9771 15.5033 12.5221C13.5747 13.6337 11.9074 14.5952 11.8129 14.6507L11.6295 14.7563V10.4991C11.6295 8.15928 11.6462 6.24185 11.6628 6.24185C11.6795 6.24185 13.3135 7.16999 15.2921 8.30933Z" fill="#FF0000" />
    </svg>
  );
}

export default memo(YoutubeIcon);