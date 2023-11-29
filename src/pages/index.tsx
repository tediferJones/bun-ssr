import Layout from 'Layout';
import ProtectPage from 'components/ProtectPage';
import UserInfo from 'components/UserInfo';

export default function index() {
  return (
    <Layout title='Welcome'>
      <ProtectPage>
        <div className='p-4 flex justify-between'>
          <h1>THIS IS A PROTECTED PAGE YOU MUST BE SIGNED IN</h1>
          <UserInfo />
        </div>
      </ProtectPage>
    </Layout>
  )
}
