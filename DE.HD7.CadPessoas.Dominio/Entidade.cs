using System;

namespace DE.HD7.CadPessoas.Dominio
{
    public class Entidade
    {
        private string _id;
        public string Id
        {
            get
            {
                if (!string.IsNullOrEmpty(_id))
                {
                    return _id;
                }
                _id = Guid.NewGuid().ToString("N");
                return _id;
            }
            set { _id = value; }
        }
    }
}
