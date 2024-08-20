import { Header } from "./../_components/Header";

interface Folder {
    folder_id: string;
    folder_name: string;
    note_count: number;
}

export default function Folder() {

    const folders: Folder[] = [
        { folder_id: '0', folder_name: '보낸 노트', note_count: 10 },
        { folder_id: '1', folder_name: '좋아요', note_count: 5 },
        { folder_id: '2', folder_name: '이번달 노트', note_count: 7 },
      ];

    return <main className="">
        <Header title="폴더" buttonText=""></Header>
        <section className="content-wrap bgScroll">
          <ul className="folderWrap">
            <li className="folderMin add-folder">
              <button name="폴더추가" className="FolderBtn dark">
                  <h3>폴더추가</h3>
              </button>
            </li>
            {folders.slice(1).map((folder, index) => (
                <li key={folder.folder_id} className="folderMin">
                    <button className="FolderBtn light">
                        <h3>{folder.folder_name}</h3>
                        <p>노트 {folder.note_count}개</p>
                    </button>
                </li>
            ))}
            <li className="folderMin sent-notes">
                <button name="보낸 노트" className="FolderBtn light">
                    <h3>{folders[0].folder_name}</h3>
                    <p>노트 {folders[0].note_count}개</p>
                </button>
            </li>
          </ul>    
        </section>
    </main>;
}
